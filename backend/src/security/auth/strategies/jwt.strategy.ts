import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "../../users/entities/user.entity";
import { AuthService } from "../auth.service";
import { JwtPayload } from "../interfaces/jwt-payload.interface";
import { config } from "../../../config";

@Injectable()
export class JwtStrategy extends PassportStrategy( Strategy ) {

    constructor(
        private readonly authService:AuthService,
        @Inject(config.KEY) 
        configService: ConfigType<typeof config>,
    ){
        super({
            secretOrKey:configService.jwt.secret,
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()
        });
    }

    async validate( payload: JwtPayload ):Promise<User>{
        const { id, hasAuthorized } = payload;

        const user = await this.authService.validateUser({ user:undefined },id);

        const { phoneVerification, emailVerification } = user;
        
        if( ( phoneVerification || emailVerification) && !hasAuthorized ) throw new UnauthorizedException('invalid authorization');

        return user;
    }
}
import { ConfigType } from "@nestjs/config";
import { Strategy } from "passport-jwt";
import { User } from "../../users/entities/user.entity";
import { AuthService } from "../auth.service";
import { JwtPayload } from "../interfaces/jwt-payload.interface";
import { config } from "../../../config";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly authService;
    constructor(authService: AuthService, configService: ConfigType<typeof config>);
    validate(payload: JwtPayload): Promise<User>;
}
export {};

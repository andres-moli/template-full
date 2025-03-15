import { User } from '../users/entities/user.entity';
import { AuthService } from './auth.service';
import { SignUpInput as SignupInput, SignInInput as SigninInput, SignupEmailInput } from './dto';
import { AuthResponse } from './types/auth-response.type';
import { SigninAdminInput } from './dto/singin-admin.input';
import { ValidateTokenInput } from './dto/validate-token.input';
import { ApprovalTokenInput } from './dto/approval-token.input';
import { SendDoubleVerificationInput } from './dto/send-double-verification.input';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    signUpWithDocument(signupInput: SignupInput): Promise<AuthResponse>;
    signUpWithEmail(signupInput: SignupEmailInput): Promise<AuthResponse>;
    signIn(signinInput: SigninInput): Promise<AuthResponse>;
    signInAdmin(signInAdminInput: SigninAdminInput, context: any): Promise<AuthResponse>;
    revalidate(user: User): AuthResponse;
    sendEmailRecovryPassword(email: string): Promise<String>;
    resetPassword(user: User, password: string): Promise<User>;
    validateUserToken(validateTokenInput: ValidateTokenInput): Promise<User>;
    approvalJwt(approvalTokenInput: ApprovalTokenInput): Promise<AuthResponse>;
    sendsendCodeDoubleVerification(sendDoubleVerificationInput: SendDoubleVerificationInput): Promise<string>;
}

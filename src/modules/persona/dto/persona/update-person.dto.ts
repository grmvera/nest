import { BasePersonatDto } from "./base-persona.dto";

export class PersonaUpdate extends BasePersonatDto{
    @IsOptional()
    @IsString()
    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly nombre:string;

    @IsOptional()
    @IsString()
    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly cedula:string;

    @IsOptional()
    @IsDate()
    @IsNotEmpty(isNotEmptyValidationOpntions())
    readonly fechaNacimiento:date;

    @IsOptional()
    @IsString()
    @IsString(IsStringValidationOpntions())
    readonly nacionalidad:string;
}
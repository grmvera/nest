import { BaseFundaciontDto } from "./base-fundacion.dto";

export class FundacionCreate extends BaseFundaciontDto {
    
    @IsString()
    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly nombre:string;

    @IsString()
    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly direccion:string;

    @IsString()
    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly encargado:string;


    @IsString()
    @IsString(IsStringValidationOpntions())
    @IsNotEmpty(isNotEmptyValidationOpntions())
    readonly telefono:string;

    @IsNotEmpty()
    @IsString()
    @IsIn([])
    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsNotEmpty(isNotEmptyValidationOpntions())
    readonly Persona:PersonaEntity[];
}
import { BaseFundaciontDto } from "./base-fundacion.dto";

export class FundacionUpdate extends BaseFundaciontDto{
    
    @IsOptional()
    @IsString()
    @IsString(IsStringValidationOpntions())
    readonly nombre:string;

    @IsOptional()
    @IsString()
    @IsString(IsStringValidationOpntions())
    readonly direccion:string;

    @IsOptional()
    @IsString()
    @IsString(IsStringValidationOpntions())
    readonly encargado:string;

    @IsOptional()
    @IsString()
    @IsString(IsStringValidationOpntions())
    readonly telefono:string;

    @IsNotEmpty()
    @IsString()
    @IsIn([])
    @IsNotEmpty(isNotEmptyValidationOpntions())
    readonly Persona:PersonaEntity[];
}
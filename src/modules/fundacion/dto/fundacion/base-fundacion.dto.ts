import { IsNotEmpty } from "class-validator";
import { IsIn, IsOptional, isPositive, IsString } from "class-validator/types/decorator/decorators";
import { PersonaEntity } from "src/modules/persona/entities/persona.entity";
import { FundacionEntity } from "src/modules/sales/entities";
// import { isNotEmptyValidationOpntions, IsStringValidationOpntions,IsPositiveValidationOpntions } from '@shared/validation'
export  class BasePersonatDto{

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

function isNotEmptyValidationOpntions(): import("class-validator").ValidationOptions {
    throw new Error("Function not implemented.");
}


function IsStringValidationOpntions(): import("class-validator").ValidationOptions {
    throw new Error("Function not implemented.");
}


function IsPositiveValidationOpntions(): unknown {
    throw new Error("Function not implemented.");
}

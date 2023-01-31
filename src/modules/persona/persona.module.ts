import { Global, Module } from "@nestjs/common";
import { PersonaProviders } from "./providers";

// import {DatabaseModule} from "@database";

@Global()
@Module(
    {
        // imports: [DatabaseModule],
        controllers:[],
        providers:[
            ...PersonaProviders
        ],
    })

    export class PersonaModule{

    }
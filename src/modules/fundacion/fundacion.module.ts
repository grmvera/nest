import { Global, Module } from "@nestjs/common";
import { FundacionProviders } from "./providers";

// import {DatabaseModule} from "@database";

@Global()
@Module(
    {
        // imports: [DatabaseModule],
        controllers:[],
        providers:[
            ...FundacionProviders
        ],
    })

    export class FundacionModule{

    }
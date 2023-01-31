import { PersonaEntity } from 'src/modules/persona/entities/persona.entity';
import { RepositoryEnum } from 'src/shared/enums';
import { DataSource } from 'typeorm';
import { FundacionEntity } from '../entities/fundacion.entity';


// import { DataSourceEnum, RepositoryEnum } from '@shared/enums';
// import { RequirementRequestEntity } from '../entities/requirement-request.entity';



export const personaProviders = [
  {
    provide: RepositoryEnum.PERSONA_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(PersonaEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.FUNDACION_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(FundacionEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },

]
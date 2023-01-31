import { FundacionEntity } from 'src/modules/fundacion/entities/fundacion.entity';
import { RepositoryEnum } from 'src/shared/enums';
import { DataSource } from 'typeorm';
import { PersonaEntity } from '../entities/persona.entity';


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
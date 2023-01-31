import { DataSource } from 'typeorm';


// import { DataSourceEnum, RepositoryEnum } from '@shared/enums';
// import { RequirementRequestEntity } from '../entities/requirement-request.entity';

import { PersonaEntity } from 'src/modules/persona/entities/persona.entity';
import { FundacionEntity } from 'src/modules/sales/entities';

export const personaProviders = [
  {
    // provide: RepositoryEnum.FUNDACION_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(FundacionEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    // provide: RepositoryEnum.persona_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(PersonaEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },

]
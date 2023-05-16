import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
// import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { DonationsModule } from './donations/donations.module';

@Module({
  // 1
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      // habilida o plugin code sandbox
      // plugins: [ApolloServerPluginLandingPageLocalDefault()],
      // mapeia todos os arquivos nessa extensão, a vantagem seria para o caso de ter muitos resolvers que por sua vez exigem o schema
      typePaths: ['./**/*.graphql'],
    }),
    DonationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

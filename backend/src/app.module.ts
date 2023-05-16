import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
// import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { DonationsModule } from './donations/donations.module';
import { GraphQLDateTime } from 'graphql-scalars';

@Module({
  // 1
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      // plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: ['./**/*.graphql'],
      resolvers: { DateTime: GraphQLDateTime },
    }),
    DonationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

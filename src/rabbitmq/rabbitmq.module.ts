import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Global, Module } from '@nestjs/common';

//amqplib-node
//amqp-connection-manager
@Global()
@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      uri: 'amqp://guest:guest@localhost:5672',
    }),
  ],
  exports: [RabbitMQModule],
})
export class RabbitmqModule {}

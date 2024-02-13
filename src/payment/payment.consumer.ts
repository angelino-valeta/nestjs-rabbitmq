import { Nack, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentConsumer {
  @RabbitSubscribe({
    exchange: 'amq.direct',
    routingKey: 'checkout.created',
    queue: 'microservico-pagamentos',
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async consume(msg: { checkout_id: number; total: number }) {
    try {
      sleep(20000);
      console.log('CONSUMINDO MS', msg);
      // throw new Error('Erro ao processar pagamento');
    } catch (err) {
      return new Nack(true);
      // ACK mode:
      // ACK (descartar a msg)
      // Nack (descarte a msg ou enfileire novamente)

      // 2 tipos de erros
      // Erros recuperaveis - mastercard está fora, meu banco de dados está fora
      // limite de processament - 3x tipos: dead letter queue, delay messages
      // idempotencia - exemplo não fazer o pagamento duas vezes
      // Erros irecuperaveis - mensagem está em formato inválido de JSON, mensagem está com os dados inválidos
    }
  }
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

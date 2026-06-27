import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Injectable } from '@nestjs/common';
import { OrderWithUser } from './orders.service';

@Injectable()
@WebSocketGateway({ cors: { origin: '*' } })
export class OrdersGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server!: Server;

  async handleConnection(client: Socket) {
    const userId = client.handshake.query.userId as string;
    const role = client.handshake.query.role as string;

    if (role === 'employee' || role === 'admin') {
      await client.join('employees_room');
      console.log(`Empleado conectado al WS: ${client.id}`);
    } else if (userId) {
      await client.join(`user_room_${userId}`);
      console.log(`Cliente ${userId} conectado al WS: ${client.id}`);
    }
  }

  handleDisconnect(client: Socket) {
    console.log(`Cliente desconectado: ${client.id}`);
  }

  notifyOrderCreated(order: OrderWithUser) {
    this.server.to('employees_room').emit('order.created', order);
    this.server.to(`user_room_${order.user?.id}`).emit('order.created', order);
  }

  notifyOrderUpdated(order: OrderWithUser) {
    this.server.to('employees_room').emit('order.updated', order);
    this.server.to(`user_room_${order.user?.id}`).emit('order.updated', order);
  }
}

import { Component } from '@angular/core';
import { TicketComponent } from "./ticket/ticket.component";
import { Ticket } from './ticket.model';
import { TicketTComponent } from "./ticket-t/ticket-t.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [TicketComponent, TicketTComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = []

  onAdd(ticketData: { title: string, text: string }) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString(),
      status: 'open'
    }

    this.tickets.push(ticket);
    console.log(this.tickets);
  }

  onCloseTicket(ticketId: string) {
    this.tickets = this.tickets.map((ticket)=>{
      if(ticket.id === ticketId) {
        return {
          ...ticket,
          status: 'closed'
        }
      }
      return ticket
    })
  }
}

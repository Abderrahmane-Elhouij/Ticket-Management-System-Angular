import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket-t',
  standalone: true,
  imports: [],
  templateUrl: './ticket-t.component.html',
  styleUrl: './ticket-t.component.css'
})
export class TicketTComponent {
  data = input.required<Ticket>();
  detailsVisibale = signal(true);
  close = output();

  onToggleDetails() {
    // the upadate method take the current value of the signal and return the new value
    this.detailsVisibale.update((wasVsible) => !wasVsible);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }

}

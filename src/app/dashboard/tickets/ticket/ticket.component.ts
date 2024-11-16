import { Component, ElementRef, output, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form')
  add = output<{ title: string, text: string }>()

  onsubmit(title: string, ticketText: string) {
    this.add.emit({ title, text: ticketText });
    this.form().nativeElement.reset();
  }
}

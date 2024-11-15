import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus = 'online';
  private destroyRef = inject(DestroyRef);
  // interaval ?: ReturnType<typeof setInterval>;

  ngOnInit() {
    console.log('On Init');
    const interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

    // The interval is cleared when the component is destroyed to prevent memory leaks.
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    })
  }

  ngAferViewInit() {
    console.log('After View Init');
  }

  // ngOnDestroy() {
  //   clearTimeout(this.interaval);
  // }
}

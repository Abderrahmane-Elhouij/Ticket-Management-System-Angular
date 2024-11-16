import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  private destroyRef = inject(DestroyRef);
  // interaval ?: ReturnType<typeof setInterval>;

  constructor() {
    effect(() => {
      console.log('Current status:', this.currentStatus());
    })
  }

  ngOnInit() {
    console.log('On Init');
    const interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
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

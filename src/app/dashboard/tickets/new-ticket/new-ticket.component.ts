import { AfterViewInit, Component, ElementRef, OnInit, output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit{

  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  add = output<{title: string, request: string}>()

  ticketTitle = '';
  ticketRequest = '';

  ngOnInit(): void {
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log(this.form?.nativeElement);
  }

  onSubmit() {
    this.add.emit({title: this.ticketTitle, request: this.ticketRequest});
    this.form?.nativeElement.reset();
  }
}

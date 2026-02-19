import { Component, inject, Input } from "@angular/core";
import { Router } from "@angular/router";
import { NgClass } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TranslationService } from "../../services/translation.service";
import { Colorize } from "../../colorize";
import { TableComponent } from "../../components/table/table";

@Component({
  selector: 'app-product',
  templateUrl: './product.html',
  standalone: true,
  imports: [NgClass, FormsModule, Colorize, TableComponent],
})
export class Product {
  transService = inject(TranslationService);
  titleForFun = 'angular-works for fun'
  inputModel = ''
  gender = ''

  products = [
    { id: 'PRD-001', name: 'Neural Processor', category: 'Hardware', price: '$4,200', status: 'Active' },
    { id: 'PRD-002', name: 'Quantum Memory', category: 'Hardware', price: '$12,500', status: 'Reserved' },
    { id: 'PRD-003', name: 'Cyberdeck V4', category: 'Device', price: '$8,900', status: 'Maintenance' },
    { id: 'PRD-004', name: 'ICE Breaker', category: 'Software', price: '$1,500', status: 'Active' },
    { id: 'PRD-005', name: 'Biometric Scanner', category: 'Security', price: '$3,150', status: 'Offline' },
  ];

  productColumns = ['id', 'name', 'category', 'price', 'status'];

  @Input() name = '';

  constructor(private router: Router) { }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  onNameChange(event: Event) {
    this.titleForFun = (event.target as HTMLInputElement).value;
  }
}
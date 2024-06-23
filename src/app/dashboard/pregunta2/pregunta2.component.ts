import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pregunta2',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './pregunta2.component.html',
  styleUrl: './pregunta2.component.css'
})
export class Pregunta2Component {
  mostrarResultado = false;
  precioFinal ="";
  pregunta2 = {
  cantidad:null,
  precioUnitario:null
  }
  avisoDescuento = "";
calcularPregunta2(): void{

  const cantidad = Number(this.pregunta2.cantidad);
  const precioUnitario = Number(this.pregunta2.precioUnitario);
  const precioTotal = cantidad * precioUnitario;

  if (precioTotal > 200) {
    this.precioFinal = (precioTotal * 0.80).toFixed(2); // Aplicando 20% de descuento
    this.avisoDescuento = 'Se ha aplicado un descuento del 20%';
  } else {
    this.precioFinal = precioTotal.toFixed(2);
    this.avisoDescuento = 'No se aplica descuento';
  }

  this.mostrarResultado = true;
}
}
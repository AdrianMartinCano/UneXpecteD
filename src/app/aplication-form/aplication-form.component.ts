import { Component } from '@angular/core';

@Component({
  selector: 'app-aplication-form',
  templateUrl: './aplication-form.component.html',
  styleUrls: ['./aplication-form.component.css']
})
export class AplicationFormComponent {
  characterName: string = '';
  discordUser: string = '';
  characterClass: string = '-1'; // Inicializa con el valor predeterminado
  characterClassText: string = ''; // Almacena el texto seleccionado
  characterRole: string = '-1'; // Inicializa con el valor predeterminado
  characterRoleText: string = ''; // Almacena el texto seleccionado

  onClassChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.characterClass = selectElement.value;
    this.characterClassText = selectElement.options[selectElement.selectedIndex].text;
    console.log('Clase seleccionada:', this.characterClass, this.characterClassText);
  }

  onRoleChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.characterRole = selectElement.value;
    this.characterRoleText = selectElement.options[selectElement.selectedIndex].text;
    console.log('Rol seleccionado:', this.characterRole, this.characterRoleText);
  }

  onSubmit(): void {
    // Lógica para manejar el envío del formulario
    console.log('Formulario enviado', {
      characterName: this.characterName,
      discordUser: this.discordUser,
      characterClass: this.characterClass,
      characterClassText: this.characterClassText,
      characterRole: this.characterRole,
      characterRoleText: this.characterRoleText
    });
  }
}

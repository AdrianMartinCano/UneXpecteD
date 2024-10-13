import { Component } from '@angular/core';

@Component({
  selector: 'app-aplication-form',
  templateUrl: './aplication-form.component.html',
  styleUrls: ['./aplication-form.component.css']
})
export class AplicationFormComponent {
  characterName: string = '';
  discordUser: string = '';
  characterClassId: string = '-1';
  characterClass: string = 'Selecciona una opción'
  characterRole: string = '0';

  onClassChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.characterClassId = selectElement.value;
    this.characterClass = selectElement.options[selectElement.selectedIndex].text;
  }

  onRoleChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;

  }

  onSubmit(): void {
    // Lógica para manejar el envío del formulario
    console.log('Formulario enviado', {
      characterName: this.characterName,
      discordUser: this.discordUser,
      characterClass: this.characterClass,
      characterClassId: this.characterClassId,
      characterRole: this.characterRole

    });
  }


  ngOnInit(): void {



  }



}

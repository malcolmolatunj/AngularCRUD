import { Component } from '@angular/core';

@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.scss'],
})
export class CreateRegistrationComponent {
  packages = ['Monthly', 'Quarterly', 'Yearly'];
  reasons = [
    'Toxic Fat Reduction',
    'Energy and Endurance',
    'Building Lean Muscle',
    'Healthier Digestive System',
    'Sugar-craving Body',
    'Fitness',
  ];
}

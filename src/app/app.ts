import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './common-ui/profile-card/profile-card';
import { Profile } from './data/interfaces/profile.iterface';
import { ProfileService } from './data/services/profile.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    profileService = inject(ProfileService);
    profiles: Profile[] = [];

    constructor() {
        this.profileService.getTestAccounts()
            .subscribe((accounts) => {
                this.profiles = accounts;
            });
    }
}

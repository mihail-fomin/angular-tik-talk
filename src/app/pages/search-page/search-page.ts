import { Component, inject } from '@angular/core';
import { ProfileService } from '../../data/services/profile.service';
import { Profile } from '../../data/interfaces/profile.iterface';
import { ProfileCard } from '../../common-ui/profile-card/profile-card';

@Component({
  selector: 'app-search-page',
  imports: [ProfileCard],
  templateUrl: './search-page.html',
})
export class SearchPage {
    profileService = inject(ProfileService);
    profiles: Profile[] = [];

    constructor() {
        this.profileService.getTestAccounts()
            .subscribe((accounts) => {
                this.profiles = accounts;
            });
    }
}

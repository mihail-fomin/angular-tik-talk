import { Component, Input } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.iterface';
import { ImageUrlPipe } from '../../helpers/pipes/image-url-pipe';

@Component({
  selector: 'app-profile-card',
  imports: [ImageUrlPipe],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {
    @Input() profile!: Profile;

}

import { inject, Pipe, PipeTransform } from '@angular/core';
import { ProfileService } from '../../data/services/profile.service';

@Pipe({
  name: 'imageUrl'
})
export class ImageUrlPipe implements PipeTransform {
    profileService = inject(ProfileService);
    transform(value: string | null): string | null {
        if (!value) {
            return null;
        }

        return `${this.profileService.baseAPIUrl}/${value}`;
    }

}

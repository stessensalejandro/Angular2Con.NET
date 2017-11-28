import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../../app/models/movie';

@Pipe({
    name: 'moviesFilter',
    pure: false
})
export class MoviesFilterPipe implements PipeTransform {

    transform(items: Movie[], filter: string): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.name.startsWith(filter) || item.genre.startsWith(filter));
    }

}
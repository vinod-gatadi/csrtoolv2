import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }

        return items.filter(eachItemObj => {
            let isMatched = false;
            for (const key of Object.keys(eachItemObj)) {
                if (
                    eachItemObj[key]
                        .toString()
                        .toLowerCase()
                        .indexOf(searchText.toLowerCase()) !== -1
                ) {
                    isMatched = true;
                    break;
                }
            }
            return isMatched;
        });
    }
}

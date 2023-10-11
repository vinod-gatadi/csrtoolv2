import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'join'
})
export class JoinPipe implements PipeTransform {
    transform(value: Object, ...args: string[]): unknown {
        return args
            .map(a => value[a])
            .filter(v => v)
            .join(', ');
    }
}

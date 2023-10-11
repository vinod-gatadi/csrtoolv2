import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[numeric]'
})
export class NumericDirective {
    private specialKeys = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete'];

    @Input() decimals = 0; // Decimal allowed
    @Input() minValue = 0; // Min value allowed
    @Input() maxValue = 100000; // Max value allowed

    private checkNumeric(value: string) {
        if (this.decimals <= 0) {
            return String(value).match(new RegExp(/^\d+$/));
        } else {
            const regExpString = '^\\s*((\\d+(\\.\\d{0,' + this.decimals + '})?)|((\\d*(\\.\\d{1,' + this.decimals + '}))))\\s*$';
            return String(value).match(new RegExp(regExpString));
        }
    }

    private checkMinValue(value: string) {
        return this.minValue <= parseFloat(value);
    }

    private checkMaxValue(value: string) {
        return this.maxValue >= parseFloat(value);
    }

    constructor(private el: ElementRef) {
        //console.log('NumericDirective.. constructor');
    }

    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        // Do not use event.keycode this is deprecated.
        // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
        const current: string = this.el.nativeElement.value;
        const next: string = current.concat(event.key);
        if (next && ( !this.checkNumeric(next) || !this.checkMaxValue(next) || !this.checkMinValue(next))) {
            event.preventDefault();
        }
    }
}

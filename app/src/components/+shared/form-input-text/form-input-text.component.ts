import { Component, Input } from '@angular/core';
import { Control } from '@angular/common';

@Component({
    selector: 'form-input-text',
    templateUrl: 'src/components/+shared/form-input-text/form-input-text.component.html'
})

export class FormInputTextComponent {
    @Input() inputId: string;
    @Input() inputType: string;
    @Input() inputControl: Control;
}

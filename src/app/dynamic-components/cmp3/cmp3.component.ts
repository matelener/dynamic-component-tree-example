import {Component} from '@angular/core';
import {DynamicComponent} from '../../consts/dynamic-components-map.const';
import {DynamicComponentType} from '../../enums/dynamic-component-type.enum';
import {DynamicComponentBase} from '../dynamic-component-base';

@DynamicComponent(DynamicComponentType.cmp3)
@Component({
  selector: 'app-cmp3',
  templateUrl: './cmp3.component.html',
  styleUrls: ['./cmp3.component.scss']
})
export class Cmp3Component extends DynamicComponentBase {
}

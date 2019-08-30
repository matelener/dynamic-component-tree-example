import {Component} from '@angular/core';
import {DynamicComponent} from '../../consts/dynamic-components-map.const';
import {DynamicComponentType} from '../../enums/dynamic-component-type.enum';
import {DynamicComponentBase} from '../dynamic-component-base';

@DynamicComponent(DynamicComponentType.cmp2)
@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.scss']
})
export class Cmp2Component extends DynamicComponentBase {
}

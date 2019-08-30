import {Component} from '@angular/core';
import {DynamicComponent} from '../../consts/dynamic-components-map.const';
import {DynamicComponentType} from '../../enums/dynamic-component-type.enum';
import {DynamicComponentBase} from '../dynamic-component-base';


@DynamicComponent(DynamicComponentType.cmp1)
@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.scss']
})
export class Cmp1Component extends DynamicComponentBase {
}

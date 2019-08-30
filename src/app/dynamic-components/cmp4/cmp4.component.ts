import {Component} from '@angular/core';
import {DynamicComponent} from '../../consts/dynamic-components-map.const';
import {DynamicComponentType} from '../../enums/dynamic-component-type.enum';
import {DynamicComponentBase} from '../dynamic-component-base';

@DynamicComponent(DynamicComponentType.cmp4)
@Component({
  selector: 'app-cmp4',
  templateUrl: './cmp4.component.html',
  styleUrls: ['./cmp4.component.scss']
})
export class Cmp4Component extends DynamicComponentBase {

}

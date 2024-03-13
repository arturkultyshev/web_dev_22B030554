import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product: Product | undefined;
  @Output() remove = new EventEmitter();


  share(massage:string) {
    const phoneNumber = '+77770230743';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(massage)}`;
    window.location.href = whatsappUrl;
  }

  onNotify(){
    window.alert('You will be notified when the product goes on sale');
  }

  switchLike(){
    if(this.product){
     this.product.likes++;

  }
}
}

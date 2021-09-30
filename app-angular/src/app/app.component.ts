import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate } from '@angular/animations';
import {ProductService} from "./services/product/product.service";
import {MenuItem} from "primeng/api";
import {CartService} from "./services/cart/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
      trigger('rowExpansionTrigger', [
          state('void', style({
              transform: 'translateX(-10%)',
              opacity: 0
          })),
          state('active', style({
              transform: 'translateX(0)',
              opacity: 1
          })),
          transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
      ])
  ]
})
export class AppComponent implements OnInit{
    constructor(public productService: ProductService,
                public cartService: CartService) { }
  // @ts-ignore
  items: MenuItem[];

    ngOnInit() {
      this.productService.getProducts().subscribe((value)=>{console.log(value)})

      this.items = [
        {
          label:'File',
          icon:'pi pi-fw pi-file',
          items:[
            {
              label:'New',
              icon:'pi pi-fw pi-plus',
              items:[
                {
                  label:'Bookmark',
                  url:'http://localhost:4200/product/',
                  icon:'pi pi-fw pi-bookmark'
                },
                {
                  label:'Video',
                  icon:'pi pi-fw pi-video'
                },

              ]
            },
            {
              label:'Delete',
              icon:'pi pi-fw pi-trash'
            },
            {
              separator:true
            },
            {
              label:'Export',
              icon:'pi pi-fw pi-external-link'
            }
          ]
        },
        {
          label:'Edit',
          icon:'pi pi-fw pi-pencil',
          items:[
            {
              label:'Left',
              icon:'pi pi-fw pi-align-left'
            },
            {
              label:'Right',
              icon:'pi pi-fw pi-align-right'
            },
            {
              label:'Center',
              icon:'pi pi-fw pi-align-center'
            },
            {
              label:'Justify',
              icon:'pi pi-fw pi-align-justify'
            },

          ]
        },
        {
          label:'Users',
          icon:'pi pi-fw pi-user',
          items:[
            {
              label:'New',
              icon:'pi pi-fw pi-user-plus',

            },
            {
              label:'Delete',
              icon:'pi pi-fw pi-user-minus',

            },
            {
              label:'Search',
              icon:'pi pi-fw pi-users',
              items:[
                {
                  label:'Filter',
                  icon:'pi pi-fw pi-filter',
                  items:[
                    {
                      label:'Print',
                      icon:'pi pi-fw pi-print'
                    }
                  ]
                },
                {
                  icon:'pi pi-fw pi-bars',
                  label:'List'
                }
              ]
            }
          ]
        },
        {
          label:'Events',
          icon:'pi pi-fw pi-calendar',
          items:[
            {
              label:'Edit',
              icon:'pi pi-fw pi-pencil',
              items:[
                {
                  label:'Save',
                  icon:'pi pi-fw pi-calendar-plus'
                },
                {
                  label:'Delete',
                  icon:'pi pi-fw pi-calendar-minus'
                },

              ]
            },
            {
              label:'Archieve',
              icon:'pi pi-fw pi-calendar-times',
              items:[
                {
                  label:'Remove',
                  icon:'pi pi-fw pi-calendar-minus'
                }
              ]
            }
          ]
        },
      ];
  }
}


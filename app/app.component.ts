import { Component } from '@angular/core';

@Component({
    selector: 'my-app', // The CSS selector
    template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  {
    name = 'Angular';
}


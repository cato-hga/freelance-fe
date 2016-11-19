import { Component } from '@angular/core';
import { Document } from './document'
@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'	
})
export class DocumentsComponent {
  documents: Document[] = [
  	{
  	  title: "My First Doc",
      description: 'Describing first document',
      file_url: 'http://google.com',
      updated_at: '11/19/16',
      image_url: 'http://google.com',
  	},
    {
      title: "My Second Doc",
      description: 'Describing second document',
      file_url: 'http://google.com',
      updated_at: '11/19/16',
      image_url: 'http://google.com',
    },
    {
      title: "My Last Doc",
      description: 'Describing last document',
      file_url: 'http://google.com',
      updated_at: '11/19/16',
      image_url: 'http://google.com',
    }
  ]
}
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsbyIdComponent } from './postsby-id.component';

describe('PostsbyIdComponent', () => {
  let component: PostsbyIdComponent;
  let fixture: ComponentFixture<PostsbyIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsbyIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsbyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

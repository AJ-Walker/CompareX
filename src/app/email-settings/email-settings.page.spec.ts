import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmailSettingsPage } from './email-settings.page';

describe('EmailSettingsPage', () => {
  let component: EmailSettingsPage;
  let fixture: ComponentFixture<EmailSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailSettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmailSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

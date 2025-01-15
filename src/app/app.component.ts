import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';


interface Slide {
  image: string;
  Subtitle: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // Fade in and out transition for slides
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }), // Initial state: fully transparent
        animate('0.5s ease-in', style({ opacity: 1 })), // Fade in to fully visible
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({ opacity: 0 })), // Fade out to fully transparent
      ]),
    ]),
    // Slide from right to left transition for slides
    trigger('slideAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }), // Slide in from the right
        animate('0.5s ease-in', style({ transform: 'translateX(0)' })), // Final position
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({ transform: 'translateX(-100%)' })), // Slide out to the left
      ]),
    ]),
  ],
})





export class AppComponent implements OnInit {
  title = 'C4R';
  selectedIndex: number = 0;
  slideInterval: number = 3000;
  autoSlideTimer: any;
  @Input() controls = true;
  @Input() indicators = true;

  ngOnInit(): void {
    this.startAutoSlide()
  }

  ngOnDestroy(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  slides: Slide[] = [
    {
      image: 'https://traveler-wd.com/wp-content/uploads/Iguazu-Falls-5.jpg', Subtitle: 'شلالات إجوازو (Iguazu Falls)', title: ' الارجنتين و البرازيل',
      description: 'مجموعه مذهلة من الشلالات تمتد علي الحدود بين الارجنتين والبرازيل , محاطة بالغابات الاستوائية الكثيفة ز تعد واحدة من اعظم عجائب الطبيعه حيث تتدفق المياه وسط ضباب ساحر '
    },
    {
      image: 'https://safarin.net/wp-content/uploads/2018/09/18-09-29_04-00-59.jpg', Subtitle: 'جبل ماترهورن (Mattterhorn)', title: 'سويسرا و ايطاليا ',
      description: 'أحد أشهر القمم الجبلية في العالم يتميز بشكله  الهرمي المهيب وقممه المغطاه بالثلوج تحيط به المراعي الخضراء والبحيرات النقية مما يجعله وجهه خيالية لعشاق الجبال'
    },
    {
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/68/e3/3c/wadirum.jpg?w=900&h=-1&s=1', Subtitle: ' وادي القمر" أو وادي رم (wadi Rum)- " ', title: '   الاردن',
      description: 'صحراء ساحرة تعرف باسم "وادي القمر" تحتوي علي تشكيلات صخرية فريدة و كثبان ؤملية حمراء يعتبر المكان مثاليا لاستكشاف الطبيعة والتامل تحت سماء مليئة بالنجوم '
    },
    {
      image: 'https://pbs.twimg.com/media/FufYmCtWYAEJVqn?format=jpg&name=large', Subtitle: ' جزيرة سكاي (isle of skye) -', title: '  اسكتلندا',
      description: 'جزيرة خلابة تشتهر  بالمناظر الطبيعية الدراميه من الجبال و الوديان الي البحيرات والشواطي. توفر تجربة استثنائية لمحبي المغامرات والمشي في الطبيعة'
    },

    {
      image: 'https://fmcdn.alqaheranews.net/378c1b60-05c1-11ee-b9ca-37f27800c222-file-1686203791360-476824780?&w=700&compress=80&gravity=face', Subtitle: ' غابة أمازون المطيرة (Amazon Rainforest)', title: '  أمريكا الجنوبية',
      description: 'أكبر غابة استوائية في العالم. موطن لأنواع لا حصر لها من النباتات والحيوانات . تتميز بتنوعها الحيوي الهائل. وشلالاتها الخفية , وأنهارها العظيمة مثل نهر الأمازون.'
    },

  ];


  startAutoSlide() {
    this.autoSlideTimer = setInterval(() => {
      this.nextSlide();
    }, this.slideInterval);
  }


  pauseAutoSlide() {
    if (this.autoSlideTimer) {
      clearInterval(this.autoSlideTimer)
    }
  }

  selectcurrentImg(index: number) {
    this.selectedIndex = index;
  }
  nextSlide() {
    if (this.selectedIndex === this.slides.length - 1) {
      this.selectedIndex = 0
    } else {
      this.selectedIndex++
    }
  }


  prevSlide() {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.slides.length - 1
    } else {
      this.selectedIndex--
    }
  }

}

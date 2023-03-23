import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LandingComponent } from './landing/landing.component';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  @ViewChild(LandingComponent) landingComponent!: LandingComponent;

  private eventSubscription!: Subscription;
  @Input() toggleAnimationObservable!: Observable<void>;

  faTimes = faTimes;

  expandableContainer: string = 'expandable-container';
  expandedContent: string = '';
  cardContent: string = 'HELLO.';
  imageName: string = '';
  largeImageName: string = '';
  paragraphs: string[] = ['HELLO.', 'This is a paragrph.'];
  linkToPage: string = 'http://qualitySticks.org';

  constructor() { }

  ngOnInit(): void {
    this.eventSubscription = this.toggleAnimationObservable.subscribe(
      () => this.toggleAnimations());
  }

  toggleAnimations(): void {
    this.landingComponent.toggleAnimations();
  }

  toggleContent(content: string): void {
    if (this.expandedContent && this.expandedContent === content) {
      this.expandableContainer = 'expandable-container';
      this.expandedContent = '';
    } else {
      this.expandableContainer = 'expandable-container expanded';
      switch (content) {
        case 'lakeForExecutive':
          this.resetValues();
          this.cardContent = 'Stacy Lake for Jackson County Executive';
          this.imageName = 'lakeHeader.png';
          this.largeImageName = 'lakeSite_full.png';
          this.paragraphs = ['In 2022 I was the web and visual designer for Stacy Lake\'s political campaign, as she ran for the position of Jackson County Executive. I designed a lot of promotional materials like posters, buttons, etc., but my main job was to build jacksoncountyexecutive.com.', 'The site was built using Angular, with a Node backend server. It unfortunately isn\'t live right now, but it may go live again in the near future.', 'Stacy decided to run for office because in 2019, the Office of the Executive raised property taxes past the legal limit for large swaths of Jackson County Residents. Many residents filed appeals, but many more didn\'t know how (or couldn\'t afford to have their homes re-appraised), and some people lost their homes as a result. Stacy decided that no matter what, she could at least do a better job than the current Jackson County Executive. She ran on a policy platform of system reforms, county infrastructure improvement, and small business support. Stacy unfortunately lost the election against the incumbent Frank White by a narrow margin of only four points.'];
          // this.linkToPage = 'https://jacksoncountyexecutive.com';
          break;
        case 'billBoat':
          this.resetValues();
          this.cardContent = 'Fathers Day Card';
          this.imageName = 'boatCard.png';
          this.paragraphs = ['I built this site as a Father\'s Day card, which is why it doesn\'t do any of the stuff you\'d normally expect a webpage to do.', 'This site was good practice for me to use conditional CSS with @media queries. To ensure the elements on the page all scale properly and the text doesn\'t get obscured by the ship, I had to code for more screen widths than I normally would.', 'I did all the artwork myself in Krita, and I\'m very happy with how the ship came out!'];
          this.linkToPage = 'http://billdanaher.club';
          break;
        case 'qualitySticks':
          this.resetValues();
          this.cardContent = 'Quality Sticks';
          this.imageName = 'qualitySticks.png';
          this.paragraphs = ['This is a React project built in the style of an e-commerce webpage. I built it because I thought an e-commerce style front-end would be challenging to make, and I wanted to get more experience with React. As the site progressed, I was happy to notice a lot of philosophical similarities between React and Angular. Also, there is no backend or server code, since this was purely meant to be a front-end exercise.', 'This website is very tongue-in-cheek and full of jokes, and I\'m not sure if anybody but me will find them funny, but I was definitely giggling maniacally while coding it. I also had lots of fun playing with AI art generators to fill out the content, which proved much more beneficial to my workflow than I anticipated.', 'This site went from zero to live in record time, considering that I could only work on it after getting home from my real job and I wasn\'t very familiar with React when I started. The whole thing took about 3 weeks, and I\'m very happy with the result, and I\'m also very happy that it\'s done now.'];
          this.linkToPage = 'http://qualitysticks.org';
          break;
        case 'hyperionMap':
          this.resetValues();
          this.cardContent = 'Hyperion Map';
          this.imageName = 'EquusAndAquila.png';
          this.largeImageName = 'EquusAndAquila_full.png';
          this.paragraphs = ['These are the first and only maps I\'ve ever drawn! They\'re designed to be a companion to the book Hyperion by Dan Simmons, to help readers figure out where the heck everything is. I stand by this artwork as not only the most accurate Hyperion map available on the internet, but the most accurate Hyperion map possible given the source material.', 'Here\'s what happened: Hyperion is a very interesting and famous sci-fi novel, and I\'d recommend it to anybody. However, it relies heavily on the reader to accurately mentally visualize the appearance, scale, and relative positions of various landmarks, and I got very confused while reading it. So I thought, I know how to draw! Maybe I\'ll take notes as I read by making little pictures of towns/rivers/etc., so I can remember where everything is. Then I thought, this is going well! Maybe I\'ll polish up this drawing and make it into a real map! I thought this would take a few weeks, but it took more like eight months.', 'An interesting thing happens when you spend eight months drawing a map that nobody asked for: I now have a burning desire to talk about a variety of obscure things and nobody to talk to. For example, did you know that I figured out the location of Keats in relation to the eastern coast of Equus by compiling a timeline of Father Dure\'s dirigible flight, and cross-referencing that against real-life dirigible flight speeds? Or that I had to draw that entire jungle on the mainland of Aquila four times to get the tree squiggles right? Tree squiggles are shockingly difficult to draw!'];
          break;
        case 'unityInventory':
          this.resetValues();
          this.cardContent = 'Inventory System';
          this.paragraphs = ['I\'m in the process of building an inventory system in Unity. I\'m still very much learning about the development engine and how to use it, but so far I\'ve been able to determine that #1) Unity has a steeper learning curve than any front-end web development framework, #2) C# requires all method names to be capitalized, which seems crazy to me (though I actually like C# a lot), and #3) Unity\'s online community strongly disagrees about most design questions.'];
        break;
      }
      this.expandedContent = content;
    }
  }

  resetValues(): void {
    this.cardContent = '';
    this.imageName = '';
    this.largeImageName = '';
    this.paragraphs = [];
    this.linkToPage = '';
  }

  closeCenterContainer(): void {
    this.expandableContainer = 'expandable-container';
  }
}

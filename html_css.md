# HTML

## HTML Introduction

https://www.w3schools.com/html/html_intro.asp

> HTML : Hyper Text Markup Language
>
> - 버전 : HTML5(HTML 5.2) - 표준화 2014
> - 웹페이지의 콘텐츠 표시
> - 웹페이지 구조 표시

## HTML Element

https://www.w3schools.com/html/html_elements.asp

- 콘텐츠를 표시하는 언어 : 태그
- 시작태그 + 콘텐츠 + 종료태그 : Element(요소)

```
문법
<tagname>Contents</tagname>

콘텐츠, 종료태그 없는 요소 : 빈요소(Empty Element)
<br>
```

> Nested Element(중첩, 포함관계)

```
<section>
  <div>
    <p>텍스트</p>
  </div>
</section>

1. p 태그 기준
- 포함하는 요소
    - div : 부모요소(parent)
    - section : 조상요소(ancestor)

2. div 태그 기준
- 포함하는 요소 : section - 부모요소
- 포함되는 요소 : p - 자식요소(children)

3. section 태그 기준
- 포함되는 요소
  - div : 자식요소
  - p : 자손요소(descendant)
```

## HTML 기본 구조

```
<!DOCTYPE html> : 웹 문서 종류 표시
<html> : html 문서 영역을 표시
  <head>  : 웹 페이지 관련 정보, 파일 정보등의 내용이 표시되는 영역
  </head>
  <body> : 웹 페이지 콘텐츠, 구조가 표시되는 영역
  </body>
</html>
```

## HTML Attribute(속성)

https://www.w3schools.com/html/html_attributes.asp

- HTML Elment에 추가 정보를 제공
- 시작태그에 작성
- name="value" 형식으로 구성

## HTML Contents 표시 Element

> - Text Contents
>   - 제목, 단락, 목록, 링크, 테이블(표)
> - Multimedia Contents / Embeded Contents
>   - 이미지, 비디오, 오디

### HTML Heading 
https://www.w3schools.com/html/html_headings.asp
- h : (h)heading : 제목 표시 태그
- h1 ~ h6 : h1 - 가장 큰 제목 

### HTML Paragraph
https://www.w3schools.com/html/html_paragraphs.asp

- p : (p)aragraph : 단락 표시 태그
- br : line (br)eak - 강제 줄바꿈 / 빈요소(Emapty Element)
- &nbsp; : (N)on-(B)reak (Sp)ace - Entity code
- hr : (H)orizontal (R)ules - 수평선 / 빈 요소(Empty Element)

### HTML link
https://www.w3schools.com/html/html_links.asp

- 다른 페이지로 연결 
- a : (a)nchor
- href : hypertext Reference : 웹페이지 참조주소

```

<a href="이동할웹페이지의url">링크이름</a> target="_balnk">링크이름</a>


- target="_blank" : 새 찯 열기
```


### HTML list
https://www.w3schools.com/html/html_lists.asp

- 순서없는 목록 : ul - (u)nordered (L)ist
- 순서있는 목록 : ol - (O)rdered (L)ist
- 목록 항목 : li - (L)ist (I)tem
- 실명 목록
  - dl : (D)escription (L)ist
  - dt : (D)escription (T)title
  - dd : (D)escription (D)ata
- 원하는 목록의 형태 : 직접 입력해서 사용

```

<ul>
  <li>항목 내용</li>
</ul>

<ol>
  <li>항목 내용</li>
</ol>


<dl>
  <dt>목록 주제(제목)</dt>
  <dd>주제에 대한 설명</dd>
```
### HTML Table

- HTML Table Generator

https://www.tablesgenerator.com/html_tables#


### HTML Image

- img : 이미지 첨부
- src : (s)ou(rc)e - 이미지 경로/이름
- alt : (alt)ernative - 대체 텍스트 



### HTML Video

- video
- controls, autoplay, loop, muted : 
 - HTML5에서 추가된 속성 : 속성 이름만 사용
 - 사용 여부에 대한 표시
- autoplay 적용시 muted를 같이 적용해야 하는 경우를 고려해함

 ```
 controls="true" => controls
 ```

### Youtube Video

## HTML Structure


- 웹페이지의 영역구분 / 배치

> 웹페이지의 HTML Contents별 영역 구분 : HTML
>
> 구분된 영역의 배치 : CSS

### HTML Semantic
https://www.w3schools.com/html/html5_semantic_elements.asp

- Semantic Element Element
  - 영역 구분하는 Element를 의미를 부여해서 사용

```
<header></header> : 로고, 로그인, 메뉴 상단 내용
<nav></nav> : (nav)igation - 메뉴
<section></section> : Contents
<article></article> : Contents
<aside></aside> : 부수적인 contents(광고)
<footer></footer> : 하단 페이지 contents(개인정보처리방침, 이용약관, 사이트맵)
<figure></figure> : 비주얼 contents 
```

### HTML Container Element(non-semantic)

- div : (div)ision
- span : 
  - 의미있게 사용하지 않고 단순히 Group화 할 때 사용
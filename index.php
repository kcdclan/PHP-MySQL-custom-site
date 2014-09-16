
<script src='var.js'></script>
<script src='functions.js'></script>
<script src='main.js'></script>
  <html>    
<link href='./gv.css' rel='stylesheet' type='text/css'>

<body onLoad='main();' class='body' background='./bg.jpg'>

    <p id='loading' class='show'><img src='./img/loading.png' width='111' height='147'>
      <br>
      If does not load please report the problem.
</p>
<p id='site' class='hide'>    
<table align='center' class='body_table'>  <tr>
    <td width='24'>&nbsp;</td>
    <td width='410'><table width='90%' border='0'>
      <tr>
        <td><img src='img/logo.png' width='600' height='94' class='effect-img'  /></td>

      </tr>
    </table>
      <table width='100%' border='0'>
        <tr>
          <td class='menu_item'>
<marquee direction='left' id='scrolling_mod' class='menu_selection' scrollamount='7' scrolldelay='50' height='20' width='1029' onClick="view('shownews')"> - </marquee></td>
    </table></td>
  </tr>
  <tr>

    <td align='center' valign='top'><br />
      <table class="menu">
      <tr>
        <td id='menu_selection_news'  class='menu_selection' onClick="view('shownews');" onMouseOver="document.getElementById('menu_selection_news').className = 'menu_selection_hover';" onMouseOut="document.getElementById('menu_selection_news').className = 'menu_selection';">News</td>
      </tr>
      <tr>
        <td id='menu_selection_board'  class='menu_selection' onClick="view('board');" onMouseOver="document.getElementById('menu_selection_board').className = 'menu_selection_hover';" onMouseOut="document.getElementById('menu_selection_board').className = 'menu_selection';">Board</a></td>
      </tr>
      <tr>
        <td id='menu_selection_about'  class='menu_selection' onClick="view('showaboutme');" onMouseOver="document.getElementById('menu_selection_about').className = 'menu_selection_hover';" onMouseOut="document.getElementById('menu_selection_about').className = 'menu_selection';">About</td>
      </tr>
      <tr>
        <td id='menu_selection'  class='menu_selection'></td>
      </tr>
      <tr>
        <td id='menu_selection_goal'  class='menu_selection' onClick="view('showgoals');" onMouseOver="document.getElementById('menu_selection_goal').className = 'menu_selection_hover';" onMouseOut="document.getElementById('menu_selection_goal').className = 'menu_selection';">Goals</td>
      </tr>
      <tr>
        <td id='menu_selection'  class='menu_selection'></td>
      </tr>
      <tr>
        <td id='menu_selection_vlog'  class='menu_selection' onClick="view('showvlog');" onMouseOver="document.getElementById('menu_selection_vlog').className = 'menu_selection_hover';" onMouseOut="document.getElementById('menu_selection_vlog').className = 'menu_selection';">Vlog</td>
      </tr>
      <tr>
        <td id='menu_selection_blog'  class='menu_selection' onClick="view('showblog');" onMouseOver="document.getElementById('menu_selection_blog').className = 'menu_selection_hover';" onMouseOut="document.getElementById('menu_selection_blog').className = 'menu_selection';">Blog</td>
      </tr>
      <tr>
        <td id='menu_selection'></td>
    </tr>    </table></td>
    <td>
     <p id='main' class='show'>----
      </p>
       </td>
  </tr>
  <tr>
    <td></td>
    <td> <table width='100%' border='0'>
        <tr><td></td>   
        </tr>
    </table><table border='0' align='center' class='copyright' id='copyright'>      <tr>        <td>Copyright g-v.us <!-- #BeginDate format:Am2m -->7/1/09  3:14<!-- #EndDate --></td>
        <td onClick="view('viewlogin');"><img src='./img/em/excl.gif' width='20' height='20'></td>
    </tr>    
    </table></td>

  </tr>
</table>
</td>
</body>
</html> 
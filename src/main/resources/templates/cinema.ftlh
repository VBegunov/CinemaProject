<#import "parts/common.ftlh" as c>
<#import "parts/login.ftlh" as l>

<@c.page>
    <div>
        <@l.logout />
    </div>
    Cinema
    <br/><br/>
    <a href="/cinemas">Вернуться к списку кинотеатров</a>


    <form method="get">
        <table id="{id}" border="0px" cellspacing="2" cellpadding="5">
            <div>
                <br/>
                <td>ID</td>
                <td>:</td>
                <td>${cinema.cinema_id}</td>
                </tr>
            </div>
            <div>
                <tr>
                    <td>Название кинотеатра</td>
                    <td>:</td>
                    <td>${cinema.name}</td>
                </tr>
            </div>
            <div>
                <tr>
                    <td>Изменения вносил пользователь</td>
                    <td>:</td>
                    <td>${cinema.user.username}</td>
                </tr>
            </div>
            <div>
                <tr>
                    <td>Зал</td>
                    <td>:</td>
                    <td><#list cinema.cinemaHalls as cinemaHall>${cinemaHall + " ,"}
                    <#else>
                        Залы отсутствуют
                    </#list>
                </tr>
            </div>
            <div>
                <a href="/cinemas/${cinema.cinema_id}/edit">
                    <input type="button" value="Изменить"/>
                </a>
            </div>
        </table>
    </form>

</@c.page>
<#import "parts/common.ftlh" as c>
<#import "parts/login.ftlh" as l>

<@c.page>
    <div
    >
        <@l.logout />
    </div>
    Cinema-edit
    <br/><br/>
    <a href="/cinemas">Вернуться к списку кинотеатров</a>

    <div>
        <form method="post" action="/cinemas/${cinema_id}/edit">
            <input type="text" name="name" placeholder="Введите название кинотеатра"/>
            <input type="hidden" name="_csrf" value="${_csrf.token}"/>
            <button type="submit">Изменить</button>
        </form>
    </div>

    <br/> Создать зал <br/>
    <form method="post" action="/cinemas/${cinema_id}/add_hall">
        <input type="number" name="rowCount" placeholder="Введите количество рядов"/>
        <input type="number" name="placeCount" placeholder="Введите количество мест"/>
        <input type="hidden" name="_csrf" value="${_csrf.token}"/>
        <button type="submit">Создать</button>
    </form>

    <br/>

    <div>
        <table>
            <tr>
                <th> id
                <th> Зал в кинотеатре
                    <th>
                    <#list cinema.getCinemaHalls() as hall>
            <tr>
                <td>${hall.getCinemaHall_id()}
                <td><b>${hall.toString()}</b>
                <td>
                    <form action="/cinemas/${cinema_id}/${hall.getCinemaHall_id()}/" method="POST">
                        <input type="hidden" name="_csrf" value="${_csrf.token}"/>
                        <input type="submit" value="Удалить"/>
                    </form>
                    </#list>
        </table>
    </div>
<#--        <select>-->
<#--            <#if cinemaHalls??>-->
<#--                    <option value="${hall.cinemaHall_id}">${hall.toString()}</option>-->
<#--            </#if>-->
<#--        </select>-->
</@c.page>
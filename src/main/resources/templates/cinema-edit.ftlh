<#import "parts/common.ftlh" as c>
<#import "parts/login.ftlh" as l>

<@c.page>
    <div xmlns:form="http://www.w3.org/1999/xhtml" xmlns:form="http://www.w3.org/1999/xhtml"
         xmlns:form="http://www.w3.org/1999/xhtml">
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

    <form action="/cinemas/${cinema_id}/show_hall">
<#--        <select>-->
<#--            <#if cinemaHalls??>-->
                <#list cinemaHalls as hall>
                    <div>
                        <b>${hall.toString()}</b>
                    </div>
<#--                    <option value="${hall.cinemaHall_id}">${hall.toString()}</option>-->
                </#list>
<#--            </#if>-->
<#--        </select>-->
    </form>

</@c.page>
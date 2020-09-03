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

    <br/>

    <br/> Название кинотеатра <br/>

    <div>
        <form method="post" action="/cinemas/add">
            <input type="text" name="name" placeholder="Введите название кинотеатра"/>
            <input type="hidden" name="_csrf" value="${_csrf.token}"/>
            <button type="submit">Добавить</button>
        </form>

    </div>
    <#if cinema.cinema_id??>
        <form action="/cinemas/{cinema_id}/show_hall" method="get">
        <#--        <select>-->
        <#--            <#if cinemaHalls??>-->
        <#if cinemaHalls??>
            <#list cinemaHalls as hall>
            <div>
                <b>${hall.toString()}</b>
            </div>
            </#list>
        </#if>
        <#--                    <option value="${hall.cinemaHall_id}">${hall.toString()}</option>-->

        <#--            </#if>-->
        <#--        </select>-->
    </form>
    </#if>


<#--    <form method="post">-->
<#--        <select class="form-select-button">-->
<#--            <#if cinemaHalls??>-->
<#--                <#list cinemaHalls as hall>-->
<#--                    <option value="${hall.cinemaHall_id}">${hall.toString()}</option>-->
<#--                </#list>-->
<#--            </#if>-->
<#--        </select>-->
<#--    </form>-->

</@c.page>